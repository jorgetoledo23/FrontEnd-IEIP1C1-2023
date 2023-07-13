export default function Test({datos}) {
    return <div class="accordion" id="accordionExample">
                {datos.map(s => <Sede sede={s} />)}
        </div>
};
