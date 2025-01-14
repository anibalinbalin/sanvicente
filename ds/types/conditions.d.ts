/* eslint-disable */
import type { AnySelector, Selectors } from './selectors'

export type Conditions = {
	"_hover": string
	"_focus": string
	"_focusWithin": string
	"_focusVisible": string
	"_disabled": string
	"_active": string
	"_visited": string
	"_target": string
	"_readOnly": string
	"_readWrite": string
	"_empty": string
	"_checked": string
	"_enabled": string
	"_expanded": string
	"_highlighted": string
	"_before": string
	"_after": string
	"_firstLetter": string
	"_firstLine": string
	"_marker": string
	"_selection": string
	"_file": string
	"_backdrop": string
	"_first": string
	"_last": string
	"_only": string
	"_even": string
	"_odd": string
	"_firstOfType": string
	"_lastOfType": string
	"_onlyOfType": string
	"_peerFocus": string
	"_peerHover": string
	"_peerActive": string
	"_peerFocusWithin": string
	"_peerFocusVisible": string
	"_peerDisabled": string
	"_peerChecked": string
	"_peerInvalid": string
	"_peerExpanded": string
	"_peerPlaceholderShown": string
	"_groupFocus": string
	"_groupHover": string
	"_groupActive": string
	"_groupFocusWithin": string
	"_groupFocusVisible": string
	"_groupDisabled": string
	"_groupChecked": string
	"_groupExpanded": string
	"_groupInvalid": string
	"_indeterminate": string
	"_required": string
	"_valid": string
	"_invalid": string
	"_autofill": string
	"_inRange": string
	"_outOfRange": string
	"_placeholder": string
	"_placeholderShown": string
	"_pressed": string
	"_selected": string
	"_default": string
	"_optional": string
	"_open": string
	"_fullscreen": string
	"_loading": string
	"_currentPage": string
	"_currentStep": string
	"_motionReduce": string
	"_motionSafe": string
	"_print": string
	"_landscape": string
	"_portrait": string
	"_dark": string
	"_light": string
	"_osDark": string
	"_osLight": string
	"_highConstrast": string
	"_lessContrast": string
	"_moreContrast": string
	"_ltr": string
	"_rtl": string
	"_scrollbar": string
	"_scrollbarThumb": string
	"_scrollbarTrack": string
	"_horizontal": string
	"_vertical": string
	"bp1": string
	"bp1Only": string
	"bp1Down": string
	"bp2": string
	"bp2Only": string
	"bp2Down": string
	"bp3": string
	"bp3Only": string
	"bp3Down": string
	"bp4": string
	"bp4Only": string
	"bp1ToBp2": string
	"bp1ToBp3": string
	"bp1ToBp4": string
	"bp2ToBp3": string
	"bp2ToBp4": string
	"bp3ToBp4": string
	"base": string
}

export type Condition = keyof Conditions

export type Conditional<V> =
  | V
  | Array<V | null>
  | {
      [K in keyof Conditions]?: Conditional<V>
    }

export type ConditionalValue<T> = Conditional<T>

export type Nested<P> = P & {
  [K in Selectors]?: Nested<P>
} & {
  [K in AnySelector]?: Nested<P>
} & {
  [K in keyof Conditions]?: Nested<P>
}
