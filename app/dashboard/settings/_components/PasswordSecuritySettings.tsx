"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const PasswordSecuritySettings = () => {
  const [showCurrent, setShowCurrent] = useState(false);

  return (
    <div className="p-5 md:p-8 space-y-5 md:space-y-7 w-full">
      <div className="space-y-1">
        <h2 className="text-[18px] md:text-[20px] font-semibold text-slate-900 font-poppins">
          Password & Security
        </h2>
        <p className="text-[13px] md:text-[14px] text-slate-400 font-normal font-poppins">
          Update your password and security settings
        </p>
      </div>

      <div className="space-y-4 md:space-y-5 w-full">
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700 font-poppins ml-1">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-4 py-3 focus:bg-white focus:border-blue-200 outline-none transition-all text-[14px] text-slate-700 font-medium font-poppins cursor-text"
            />
            <button
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#066EFF] transition-colors cursor-pointer"
            >
              {showCurrent ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700 font-poppins ml-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-4 py-3 focus:bg-white focus:border-blue-200 outline-none transition-all text-[14px] text-slate-700 font-medium font-poppins cursor-text"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-slate-700 font-poppins ml-1">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-slate-50 border-[0.8px] border-slate-100 rounded-[12px] px-4 py-3 focus:bg-white focus:border-blue-200 outline-none transition-all text-[14px] text-slate-700 font-medium font-poppins cursor-text"
          />
        </div>

        <div className="pt-2">
          <button className="w-full md:w-auto px-8 py-3 bg-[#066EFF] text-white rounded-[12px] text-[15px] font-semibold font-poppins hover:bg-blue-600 transition-all active:scale-[0.98] shadow-[0_8px_20px_rgba(6,110,255,0.15)] cursor-pointer">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};
