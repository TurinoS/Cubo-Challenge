import DataCircle from "./DataCircle"

const data = [
    {
      "id": 1,
      "firstName": "Carlos",
      "lastName": "Moura",
      "participation": 5
    },
    {
      "id": 2,
      "firstName": "Fernanda",
      "lastName": "Oliveira",
      "participation": 15
    },
    {
      "id": 3,
      "firstName": "Hugo",
      "lastName": "Silva",
      "participation": 20
    },
    {
      "id": 4,
      "firstName": "Eliza",
      "lastName": "Souza",
      "participation": 20
    },
    {
      "id": 5,
      "firstName": "Anderson",
      "lastName": "Santos",
      "participation": 40
    }
]

export default function DataSection() {
    return(
        <section className="flex flex-col items-center p-10">
            <h2 className="uppercase text-3xl font-bold ">dados</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className="flex items-center mt-12 gap-16">
                <table className="table-fixed border-collapse border">
                    <thead>
                        <tr>
                            <td className="w-[30px] border border-[var(--dark-gray)] py-1 px-3"></td>
                            <td className="w-[160px] border border-[var(--dark-gray)] py-1 px-3">Nome</td>
                            <td className="w-[200px] border border-[var(--dark-gray)] py-1 px-3">Sobrenome</td>
                            <td className="w-[100px] border border-[var(--dark-gray)] py-1 px-3">Participação</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person) => (
                            <tr key={person.id}>
                                <td className="text-center border border-[var(--dark-gray)] py-1 px-3">{person.id}</td>
                                <td className="border border-[var(--dark-gray)] py-1 px-3">{person.firstName}</td>
                                <td className="border border-[var(--dark-gray)] py-1 px-3">{person.lastName}</td>
                                <td className="text-center border border-[var(--dark-gray)] py-1 px-3">{person.participation}%</td>                            
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex">
                   <DataCircle
                        data1={data[0].participation}
                        data2={data[1].participation}
                        data3={data[2].participation}
                        data4={data[3].participation}
                        data5={data[4].participation}
                    /> 
                    <div className="flex flex-col justify-between">
                        <div className="flex gap-2">
                            <div className="bg-[var(--dark-gray)] w-[25px] h-[25px] rounded-lg"></div>
                            <p className="text-[var(--dark-gray)]">{data[0].firstName} {data[0].lastName}</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-[var(--green)] w-[25px] h-[25px] rounded-lg"></div>
                            <p className="text-[var(--green)]">{data[1].firstName} {data[1].lastName}</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-[var(--orange)] w-[25px] h-[25px] rounded-lg"></div>
                            <p className="text-[var(--orange)]">{data[2].firstName} {data[2].lastName}</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-[var(--light-blue)] w-[25px] h-[25px] rounded-lg"></div>
                            <p className="text-[var(--light-blue)]">{data[3].firstName} {data[3].lastName}</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-[var(--yellow)] w-[25px] h-[25px] rounded-lg"></div>
                            <p className="text-[var(--yellow)]">{data[4].firstName} {data[4].lastName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}