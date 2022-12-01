import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeHolder: 'Enter your name' | 'Enter your email address' | 'Enter your phone number'
}
export default function Input(props: InputProps) {
  const { label, placeHolder, ...nativeProps } = props;
  return (
    <>
        <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
            { label }
        </label>
        <input type="text" className="form-control rounded-pill text-lg" id="name"
        name="name" aria-describedby="name" placeholder={placeHolder}
        {...nativeProps} />
    </>
  );
}
