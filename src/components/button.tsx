import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded hover:opacity-80 outline-none border-2 focus:border-blue-600",
  {
    variants: {
      variant: {
        default: "bg-blue-500",
        outline: "bg-white border-black",
        error: "bg-red-500",
        success: "bg-green-500",
      },
      size: {
        default: "p-4",
        small: "p-0",
        large: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", variant, size, className, ...props }, ref) => {
    return (
      <>
        <button
          ref={ref}
          type={type}
          className={twMerge(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </>
    );
  }
);
Button.displayName = "Button";

export { Button };
