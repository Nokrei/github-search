import { Button } from "@/components/Atoms/Button";

type Props = {
  goToNextPage: () => void;
  goToPrevPage: () => void;
  isNextButtonDisabled: boolean;
  isPrevButtonDisabled: boolean;
};

export const Pagination = ({
  goToNextPage,
  goToPrevPage,
  isNextButtonDisabled,
  isPrevButtonDisabled,
}: Props) => {
  return (
    <div className="flex justify-center gap-3">
      <Button
        buttonText="Prev"
        onButtonClick={goToPrevPage}
        isButtonDisabled={isPrevButtonDisabled}
      />
      <Button
        buttonText="Next"
        onButtonClick={goToNextPage}
        isButtonDisabled={isNextButtonDisabled}
      />
    </div>
  );
};
