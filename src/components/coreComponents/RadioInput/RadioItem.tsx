import { FormEvent } from "react"

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
			<input className="radio-input" name={name} type="radio" />

			{children(selected)}
		</label>


	)
}

