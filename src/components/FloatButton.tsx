import { Dropdown, Button } from "antd"
import { IoIosGlobe } from "react-icons/io"
import { useTranslation } from "react-i18next"
import { Languajes } from "../utils/Languajes"
import "../styles/FloatButton.css"

const FloatButton: React.FC = () => {

    const { i18n } = useTranslation()
    const lang = i18n.language

    const items = Languajes.map(l => ({
        key: l.languaje.toLowerCase(),
        label: (
            <span className="lang-dropdown">
                <span className="lang-key"> {l.languaje} </span>
                <span className="lang-label"> {l.label} </span>
            </span>
        )
    }))


    return (

        <Dropdown menu={{items, onClick: ({ key }) => i18n.changeLanguage(key)}} placement="bottomRight" trigger={["click"]}>
            <Button type="primary" icon={<IoIosGlobe />} className="float-button"/>
        </Dropdown>

    )




}

export default FloatButton