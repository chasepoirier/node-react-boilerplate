export const TOGGLE_CONTACT_FORM = '@@layout/TOGGLE_CONTACT_FORM'
export const TOGGLE_MOBILE_MENU = '@@layout/TOGGLE_MOBILE_MENU'

export interface LayoutState {
  contact: {
    active: boolean
  }
  mobile: {
    menu: {
      active: boolean
    }
  }
}
