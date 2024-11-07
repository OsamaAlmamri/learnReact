export type  SectionProp = {
    title: string;
    description?: string;
}


function SectionTitle(props: SectionProp) {

    return (
        <div className="grid grid-cols-12 justify-content-center text-center">
            <div className=" col-span-12 md:col-span-10 lg:col-span-8  ">
                <div className="header-section">
                    <h2 className="title">{props.title}</h2>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>


    );
}

export default SectionTitle;
