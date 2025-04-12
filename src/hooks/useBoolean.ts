import React, { useCallback, useMemo, useState } from "react";

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback((): void => setValue(true), []);

  const setFalse = useCallback((): void => setValue(false), []);

  const toggle = useCallback((): void => setValue((prev) => !prev), []);

  return useMemo(() => ({ value, setTrue, setFalse, toggle }), []);
}