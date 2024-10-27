import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// created by shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
