type Props = {
  onButtonClick: () => void;
  isButtonDisabled: boolean;
  buttonText: string;
};

export const Button = ({
  onButtonClick,
  isButtonDisabled,
  buttonText,
}: Props) => {
  return (
    <button
      value={buttonText}
      onClick={onButtonClick}
      disabled={isButtonDisabled}
      className="rounded bg-blue-600 p-2 px-3  text-white duration-100 hover:bg-blue-500 disabled:bg-blue-200"
    >
      {buttonText}
    </button>
  );
};
