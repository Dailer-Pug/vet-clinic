import { useState, JSX, cloneElement } from "react"
import { RadioGroup } from "./RadioGroup"
import { RadioItem } from "./RadioItem"


type TabProp = {
	children: JSX.Element[] | JSX.Element
}

export const TabGroup = ({ children }: TabProp) => {

	const [curIndex, setCurIndex] = useState(0)
	children = Array.isArray(children) ? children : [children]
	const tabItemContent = children.map((child) => child.props.children)


	return (
		<>
			<RadioGroup onChange={(e) => setCurIndex(e)}>
				{
					children.map((child, index) => {
						return (
							<RadioItem key={index}>
								{(selected: boolean) => {
									// child = TabItem
									return cloneElement(child, {
										...child.props,
										selected: selected
									})
								}}
							</RadioItem >)
					})
				}
			</RadioGroup>
			{tabItemContent[curIndex]}
		</>
	)
}


