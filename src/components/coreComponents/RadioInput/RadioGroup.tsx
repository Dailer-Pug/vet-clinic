import { useState, cloneElement, JSX } from "react"
import { RadioForm } from "./RadioInput.styled"

type RadioGroupProps = {
	children: JSX.Element[] | JSX.Element,
	onChange: (index: number) => void,
}


export const RadioGroup = ({ children, onChange }: RadioGroupProps) => {

	const [id] = useState(Math.random())
	const [name, setName]: any = useState()
	children = Array.isArray(children) ? children : [children]
	const maping = children.map((child, index) => {
		return (cloneElement(child, {
			...child.props,
			name: `${id}`,
			click: (click: React.ChangeEvent<React.LabelHTMLAttributes<HTMLLabelElement>>, index: number) => {
				click.stopPropagation()
				console.log(index)
				onChange(index)
				setName(index)
			},
			target: name,
			index: index,
			selected: index === name,
		})
		)
	});
	return (
		<RadioForm>
			{maping}
		</RadioForm>
	)
}
