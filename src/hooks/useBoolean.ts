import React, { useCallback, useMemo, useState } from "react";

type UseBooleanReturn = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

export default function useBoolean(
  initialValue: boolean = false
): UseBooleanReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  return useMemo(
    () => ({
      value,
      setTrue: () => setValue(true),
      setFalse: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [value]
  );
}
