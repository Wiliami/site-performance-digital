// import React from "react";
const testimonials = [
  {
    name: 'Paraná Performance',
    role: 'Manutenção automotiva',
    image: "https://i.pravatar.cc/100?img=59",
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Free Car Auto Center',
    role: 'Climatização automotiva',
    image: 'https://i.pravatar.cc/100?img=65',
    rating: 5,
    feedback:
      'Antes da Performance Digital, tínhamos dificuldades em aparecer no Google e quase não recebíamos contatos novos. Depois do trabalho de otimização, nossa oficina passou a se destacar nas buscas, e hoje já estamos gerando leads consistentes toda semana. O resultado superou nossas expectativas!.',
  },
  {
    name: 'Salão Deus é Mestre',
    role: 'Salão de beleza',
    image: 'https://i.pravatar.cc/100?img=9',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

export const Testimonials = () => {
  return (
    <section className="text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest mb-2f text-slate-950 dark:text-gray-400">
          Depoimentos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-950 dark:text-white">
          O que dizem nossos <i className="text-green-500">clientes</i>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-xl shadow-lg p-6 w-full md:w-1/3 max-w-sm transform hover:scale-105 transition-transform duration-300"
            >
              {/* Aspas no canto superior direito */} 
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xl rounded-bl-xl px-4 py-2 font-bold">
                “
              </div>

              {/* Imagem */}
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Nome e cargo */}
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.role}</p>

              {/* Estrelas */}
              <div className="flex justify-center text-yellow-400 mb-4">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.065 3.276a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.065 3.276c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.065-3.276a1 1 0 00-.364-1.118L2.486 8.703c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.065-3.276z" />
                    </svg>
                  ))}
              </div>

              {/* Texto do feedback */}
              <p className="text-sm text-gray-700 text-center">{item.feedback}</p>
            </div>
          ))}
        </div>

        {/* Navegação de slides fictícia */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full" />
          <span className="w-3 h-3 bg-gray-500 rounded-full" />
          <span className="w-3 h-3 bg-gray-500 rounded-full" />
        </div> */}
      </div>
    </section>
  );
};
