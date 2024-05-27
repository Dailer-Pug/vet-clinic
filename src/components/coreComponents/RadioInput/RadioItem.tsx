import { FormEvent } from "react"
import { RadioInput } from "./RadioInput.styled";

type RadioProps = {
	children: any,
	name?: string,
	click?: (_e: FormEvent<HTMLLabelElement>, index: number) => void,
	onClick?: React.MouseEvent<HTMLButtonElement>,
	target?: string,
	index?: number,
	selected?: boolean;
}


export const RadioItem = ({ children, name, click, index, selected }: RadioProps) => {

	return (
		<label onChange={(e) => click && click(e, index!)}>
			<RadioInput className="radio-input" name={name} type="radio" />

			{children(selected)}
		</label>


	)
}

