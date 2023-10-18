type COntactIconProps = {
    icon: JSX.Element;
    color: string;
}

export default function ContactIcon({icon, color}: COntactIconProps) {
    return(
        <div className={color}>
            {icon}
        </div>
    )
}