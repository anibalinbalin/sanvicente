import { withoutSpace } from '../helpers.mjs';

const conditions = new Set(["_hover","_focus","_focusWithin","_focusVisible","_disabled","_active","_visited","_target","_readOnly","_readWrite","_empty","_checked","_enabled","_expanded","_highlighted","_before","_after","_firstLetter","_firstLine","_marker","_selection","_file","_backdrop","_first","_last","_only","_even","_odd","_firstOfType","_lastOfType","_onlyOfType","_peerFocus","_peerHover","_peerActive","_peerFocusWithin","_peerFocusVisible","_peerDisabled","_peerChecked","_peerInvalid","_peerExpanded","_peerPlaceholderShown","_groupFocus","_groupHover","_groupActive","_groupFocusWithin","_groupFocusVisible","_groupDisabled","_groupChecked","_groupExpanded","_groupInvalid","_indeterminate","_required","_valid","_invalid","_autofill","_inRange","_outOfRange","_placeholder","_placeholderShown","_pressed","_selected","_default","_optional","_open","_fullscreen","_loading","_currentPage","_currentStep","_motionReduce","_motionSafe","_print","_landscape","_portrait","_dark","_light","_osDark","_osLight","_highConstrast","_lessContrast","_moreContrast","_ltr","_rtl","_scrollbar","_scrollbarThumb","_scrollbarTrack","_horizontal","_vertical","bp1","bp1Only","bp1Down","bp2","bp2Only","bp2Down","bp3","bp3Only","bp3Down","bp4","bp4Only","bp1ToBp2","bp1ToBp3","bp1ToBp4","bp2ToBp3","bp2ToBp4","bp3ToBp4","base"])

export function isCondition(value){
  return conditions.has(value) || /^@|&|&$/.test(value)
}

const underscoreRegex = /^_/
const selectorRegex = /&|@/

export function finalizeConditions(paths){
  return paths.map((path) => {
    if (conditions.has(path)){
      return path.replace(underscoreRegex, '')
    }

    if (selectorRegex.test(path)){
      return `[${withoutSpace(path.trim())}]`
    }

    return path
  })}

  export function sortConditions(paths){
    return paths.sort((a, b) => {
      const aa = isCondition(a)
      const bb = isCondition(b)
      if (aa && !bb) return 1
      if (!aa && bb) return -1
      return 0
    })
  }