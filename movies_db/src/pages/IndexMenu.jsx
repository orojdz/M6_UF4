import { CardComp } from '../components/Card'

export function IndexMenu() {
    return(
        <div>
            <CardComp
                title={title} 
                image={image}
                rate={""}
                direction={""}
            />
            <CardComp
                title={title} 
                image={image}
                rate={""}
                direction={""}
            />
        </div>
    );
}