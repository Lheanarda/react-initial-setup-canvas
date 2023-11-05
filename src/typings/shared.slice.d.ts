export type SnackbarType = "info" | "warn" | "success";

export interface SnackbarSlice {
  isOpenSnackbar: boolean;
  type: SnackbarType;
  message: string;
}

export type CharBoolean = "Y" | "N";
