"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const WarningMessage = () => {
  useEffect(() => {
    Swal.fire({
      icon: "info",
      title:
        "تبريئ ذمه: الموقع دا معمول لمجرد تعلم البرمجه و توفير مجموعه افلام , فللعلم قد يظهر صور غير مناسبه بسب المعلومات الجاهزه, 💖شكرا",
    });
  }, []);
  return <div></div>;
};

export { WarningMessage };
