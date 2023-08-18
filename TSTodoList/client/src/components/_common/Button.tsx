import { Button, ButtonProps } from "./Button_style";

const BasicButton = ({
  size,
  shape,
  variant,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Button size={size} shape={shape} variant={variant} {...rest}>
      {children}
    </Button>
  );
};
export default BasicButton;
