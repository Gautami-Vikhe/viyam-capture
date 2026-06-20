import React, { useEffect, useState, useCallback, useRef, useLayoutEffect } from "react";
import Select, { components } from "react-select";
import type { StylesConfig } from "react-select";

export type Option = {
  value: string;
  label: string;
};

export interface MultiSelectProps {
  options: Option[];
  defaultValue?: Option[];
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  maxSelections?: number;
  onChange?: (selected: Option[]) => void;
  /** Fallback used only before the first width measurement runs. */
  visibleLimit?: number;
}

const CHIP_STYLE: React.CSSProperties = {
  backgroundColor: "#E7F1FB",
  color: "#1F6DB2",
  borderRadius: "4px",
  padding: "2px 6px 2px 8px",
  fontSize: "12px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "4px",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const MORE_BADGE_RESERVED_WIDTH = 72; // px reserved for "+N more" chip incl. gap

const DropdownIndicator = (props: any) => {
  return (
    <div {...props.innerProps} style={{ padding: '0 8px' }}>
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: '4px solid currentColor',
          transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
          marginTop: props.selectProps.menuIsOpen ? '2px' : '0'
        }}
      />
    </div>
  );
};

const CommonMultiSelect: React.FC<MultiSelectProps> = ({
  options,
  defaultValue,
  className,
  ariaLabel,
  placeholder = "Select",
  maxSelections,
  onChange,
  visibleLimit = 2,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(defaultValue || []);
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(visibleLimit);

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const customStyles: StylesConfig<Option, true> = {
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? "#1F6DB2" : "white",
      color: state.isSelected ? "#fff" : state.isFocused ? "#1F6DB2" : "#707070",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#1F6DB2", color: "#fff" },
    }),
    menu: (base: any) => ({ ...base, position: "absolute", width: "100%", zIndex: 9999 }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: "#E7F1FB",
      borderRadius: "4px",
      flexShrink: 0,
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: "#1F6DB2",
      fontWeight: 500,
      whiteSpace: "nowrap",
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      color: "#1F6DB2",
      "&:hover": { backgroundColor: "#1F6DB2", color: "#fff" },
    }),
    valueContainer: (base: any) => ({
      ...base,
      flexWrap: showAll ? "wrap" : "nowrap",
      overflow: showAll ? "visible" : "hidden",
      maxHeight: showAll ? "none" : "38px",
    }),
  };

  const handleChange = useCallback((selected: readonly Option[] | null) => {
    let newSelected = selected ? [...selected] : [];
    if (maxSelections && newSelected.length > maxSelections) {
      newSelected = newSelected.slice(0, maxSelections);
    }
    setSelectedOptions(newSelected);
    if (onChange) onChange(newSelected);
  }, [maxSelections, onChange]);

  useEffect(() => {
    setSelectedOptions(defaultValue || []);
  }, [defaultValue]);

  const isOptionDisabled = (option: Option) => {
    if (!maxSelections) return false;
    if (selectedOptions.find((o) => o.value === option.value)) return false;
    return selectedOptions.length >= maxSelections;
  };

  // --- Width-based collapse calculation -------------------------------
  // Renders every selected chip off-screen with identical styling, measures
  // each one's real rendered width, then figures out how many fit inside
  // the visible container before we'd need a "+N more" badge.
  const recomputeVisibleCount = useCallback(() => {
    const container = containerRef.current;
    const measurer = measureRef.current;
    if (!container || !measurer) return;

    const total = selectedOptions.length;
    if (total === 0) {
      setVisibleCount(0);
      return;
    }

    const containerWidth = container.clientWidth;
    const chipEls = Array.from(
      measurer.querySelectorAll<HTMLElement>("[data-measure-chip]")
    );

    if (chipEls.length !== total || containerWidth === 0) {
      // Measurement not ready yet — fall back to showing everything once,
      // it'll self-correct on the next layout pass.
      return;
    }

    const GAP = 2;
    let used = 0;
    let count = 0;

    for (let i = 0; i < chipEls.length; i++) {
      const chipWidth = chipEls[i].offsetWidth;
      const remainingAfterThis = total - (i + 1);
      const reserve = remainingAfterThis > 0 ? MORE_BADGE_RESERVED_WIDTH : 0;
      const projected = used + chipWidth + (i > 0 ? GAP : 0) + reserve;

      if (projected > containerWidth && i > 0) {
        break;
      }
      used += chipWidth + (i > 0 ? GAP : 0);
      count = i + 1;
    }

    setVisibleCount(Math.max(1, count));
  }, [selectedOptions]);

  useLayoutEffect(() => {
    recomputeVisibleCount();
  }, [recomputeVisibleCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => recomputeVisibleCount());
    ro.observe(container);
    return () => ro.disconnect();
  }, [recomputeVisibleCount]);

  useEffect(() => {
    if (selectedOptions.length <= visibleCount) {
      setShowAll(false);
    }
  }, [selectedOptions.length, visibleCount]);

  const total = selectedOptions.length;
  const isCollapsible = !showAll && total > visibleCount;

  const removeChip = (value: string) => {
    const updated = selectedOptions.filter((o) => o.value !== value);
    setSelectedOptions(updated);
    if (onChange) onChange(updated);
  };

  const renderChip = (opt: Option, measuring = false) => (
    <div
      key={opt.value}
      data-measure-chip={measuring ? true : undefined}
      style={CHIP_STYLE}
    >
      {opt.label}
      {!measuring && (
        <span
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            removeChip(opt.value);
          }}
          style={{ cursor: "pointer", fontWeight: 700, lineHeight: 1 }}
        >
          ×
        </span>
      )}
    </div>
  );

  const MultiValueContainer = (props: any) => {
    // We take over rendering entirely — only fire once, on the first chip.
    if (props.index !== 0) return null;

    const visibleItems = isCollapsible
      ? selectedOptions.slice(0, visibleCount)
      : selectedOptions;

    return (
      <>
        <div
          ref={containerRef}
          style={{
            display: "flex",
            flexWrap: showAll ? "wrap" : "nowrap",
            gap: "2px",
            overflow: showAll ? "visible" : "hidden",
            width: "100%",
          }}
        >
          {visibleItems.map((opt) => renderChip(opt))}

          {isCollapsible && (
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowAll(true);
              }}
              style={{
                backgroundColor: "#1F6DB2",
                color: "#fff",
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "12px",
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              +{total - visibleCount} more
            </div>
          )}

          {showAll && total > visibleLimit && (
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowAll(false);
              }}
              style={{
                backgroundColor: "#f0f0f0",
                color: "#707070",
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "12px",
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Show less
            </div>
          )}
        </div>

        {/* Off-screen measurer: identical chip markup, used only to read
            real widths so we know how many chips actually fit. */}
        <div
          ref={measureRef}
          aria-hidden
          style={{
            position: "fixed",
            top: -9999,
            left: -9999,
            visibility: "hidden",
            display: "flex",
            flexWrap: "nowrap",
            gap: "2px",
            pointerEvents: "none",
          }}
        >
          {selectedOptions.map((opt) => renderChip(opt, true))}
        </div>
      </>
    );
  };

  const customComponents = {
    IndicatorSeparator: () => null,
    DropdownIndicator: DropdownIndicator,
    MultiValue: MultiValueContainer,
  };

  return (
    <div className="common-select">
      <Select
        isMulti
        classNamePrefix="react-select"
        className={className}
        styles={customStyles}
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        components={customComponents}
        placeholder={placeholder}
        menuPortalTarget={typeof window !== 'undefined' ? document.body : undefined}
        menuPosition="fixed"
        isOptionDisabled={isOptionDisabled}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default React.memo(CommonMultiSelect);
