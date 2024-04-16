const dataMock = [
  {
    id: '9fd2789c-50f5-4743-857b-bbfa746ed631',
    name: 'AMOXICILINA',
    published_at: '2022-12-16T18:24:24.000Z',
    company: 'MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA',
    documents: [
      {
        id: '57a35a05-1615-491c-b5ae-48ad770cdd53',
        expedient: '5064642229',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'dcc3ecc6-5b62-4236-8dfe-f61f4da93fac',
        expedient: '5064642229',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '595aeb0d-5b0d-4a05-a6f6-574a291ad574',
        name: 'HIDROQUINONA',
      },
    ],
  },
  {
    id: '9d0594ea-b9ee-42b6-b8e6-53a43eaf50bf',
    name: 'ACEZO',
    published_at: '2020-11-11T13:52:44.000Z',
    company: 'CRISTÁLIA PRODUTOS QUÍMICOS FARMACÊUTICOS LTDA.',
    documents: [
      {
        id: '5c8c4872-c9c6-4bcd-9667-5014aa602e08',
        expedient: '4931014224',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'd2d3ff45-6f5d-463e-ac46-a987f354db98',
        expedient: '4931014224',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'd0e8fd86-f131-4f9d-aceb-7af4c544e746',
        name: 'PARACETAMOL',
      },
    ],
  },
];

export { dataMock };
