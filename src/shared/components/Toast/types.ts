import { ComponentType } from "react";

export type TToastComponentAndHookCommonTypes = { classNames?: { container?: string; icon?: string; "texts-wrapper"?: string }; stylization?: { variant?: "success" | "error" } };

export type TToast =
  | ({
      id?: number;
      action?: boolean;
      time?: number;
      title?: string;
      description?: string;
    } & TToastComponentAndHookCommonTypes)
  | null;
