import { JSX } from "react"
import { TabSecStyle, TabStyle } from "./TabStyle"

type TabProsp = {
	children: JSX.Element | string,
	curIndex?: number,
	target?: number,
	selected?: boolean,
	title: string
}

export const TabItem = ({ title, selected }: TabProsp) => {


	return (

		<>
			{selected ? <TabStyle>{title}</TabStyle> : <TabSecStyle>{title}</TabSecStyle>}
		</>

	)

}
