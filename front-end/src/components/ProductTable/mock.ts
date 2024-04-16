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
    published_at: '2022-11-11T13:52:44.000Z',
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
  {
    id: '0566bac0-b5d5-40d7-9eb8-e76c885adf60',
    name: 'ALPRAZOLAM',
    published_at: '2022-07-12T18:15:47.000Z',
    company: 'EMS S/A',
    documents: [
      {
        id: '00c1f31e-a561-4f7c-8f61-81ff7a3debad',
        expedient: '4415725228',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'ba691312-9090-40f0-9368-4718a23a6beb',
        expedient: '4415725228',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '674f3f83-a082-483a-b550-e6b8facdb204',
        name: 'CANDESARTANA CILEXETILA',
      },
      {
        id: '9ae4d170-c78a-4cea-a7be-fb2bfa7d0433',
        name: 'INSULINA DETEMIR',
      },
    ],
  },
  {
    id: '6437d8a8-2694-4d2c-9a10-7163512b3bb7',
    name: 'AMOXICILINA',
    published_at: '2022-08-11T13:32:16.000Z',
    company: 'ACHÉ LABORATÓRIOS FARMACÊUTICOS S.A',
    documents: [
      {
        id: '2a6e87f1-796c-4628-8db5-faf01f9a7eae',
        expedient: '3720502210',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '3fd055a8-236c-41ac-87d8-92e0cc96b721',
        expedient: '3720502210',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '505e6d79-feac-4d79-86d8-7a892ba7a6dc',
        name: 'ÁCIDO ASCÓRBICO',
      },
    ],
  },
  {
    id: '01b155eb-c03d-4345-8a1a-64ad0dac98c1',
    name: 'ACFOL',
    published_at: '2020-11-23T15:20:33.000Z',
    company: 'CAZI QUIMICA FARMACEUTICA INDUSTRIA E COMERCIO LTDA',
    documents: [
      {
        id: '8d262c62-f690-4fb8-90eb-036031f807df',
        expedient: '4129996205',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'b2c3bd6e-e4b0-46c8-8c09-8c7b8e03720d',
        expedient: '4129996205',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '2a04ca68-67f2-425b-bee9-fbdc316a51f1',
        name: 'ESTRADIOL',
      },
      {
        id: '802ccb1c-5499-4c73-8f0a-af81137168ad',
        name: 'ALFACORIOGONADOTROPINA',
      },
    ],
  },
  {
    id: '60c21279-165a-4ed8-8987-048ff2dedff5',
    name: 'ACETILCISTEINA',
    published_at: '2019-12-12T15:12:34.000Z',
    company: 'BLAU FARMACÊUTICA S.A.',
    documents: [
      {
        id: '0e422cd4-109c-4eda-90f0-2d9578d9f68e',
        expedient: '3435471199',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '27b1febd-9736-4156-b02e-399f660cdb39',
        expedient: '3435471199',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '07915236-c9d8-4d3d-8a19-3c31b82d7f02',
        name: 'DIPIRONA MONOIDRATADA',
      },
    ],
  },
  {
    id: '8e6f5b3c-72c8-46be-9b11-095108b9b691',
    name: 'ACETONIDA DE TRIANCINOLONA',
    published_at: '2018-06-28T23:03:22.000Z',
    company: 'GEOLAB INDÚSTRIA FARMACÊUTICA S/A',
    documents: [
      {
        id: '5e0cdc50-ba20-44be-a2f4-753b6fd75884',
        expedient: '0519508180',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'aac52edd-ea7a-4459-8400-a7d64488c334',
        expedient: '0519508180',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '203c304a-939e-440e-b7cc-ad278855fb5b',
        name: 'MALEATO DE CLORFENIRAMINA',
      },
    ],
  },
  {
    id: 'eb48ad46-5e44-4492-bddf-20e010dc0144',
    name: 'AMOXICILINA SÓDICA + CLAVULANATO DE POTÁSSIO',
    published_at: '2023-03-21T12:53:57.000Z',
    company: 'EUROFARMA LABORATÓRIOS S.A.',
    documents: [
      {
        id: '3c150229-3bed-4e05-af92-a3c9d244da86',
        expedient: '0280154232',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '6a8580d2-7161-49f6-9361-ca6859efaebe',
        expedient: '0280154232',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'c8dc701b-ae89-49a6-a41d-14bcdeb99262',
        name: 'FLUMAZENIL',
      },
    ],
  },
  {
    id: 'f59759c8-9819-4417-82c2-a4d39385ec9f',
    name: 'ALPRAZOLAM',
    published_at: '2022-11-25T14:19:16.000Z',
    company: 'MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA',
    documents: [
      {
        id: '72c2c852-7615-41de-b787-90f593ccc88d',
        expedient: '4982030227',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '73788415-1883-4cdd-b0b1-4d04b9709d75',
        expedient: '4982030227',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '468fd4bc-3f34-4e38-9908-85057cd2ff79',
        name: 'SIMETICONA',
      },
    ],
  },
  {
    id: 'c201fb44-5d80-44e6-8d9c-9c15905fe269',
    name: 'AMOXICILINA TRI-HIDRATADA',
    published_at: '2021-09-16T19:59:22.000Z',
    company: 'ACHÉ LABORATÓRIOS FARMACÊUTICOS S.A',
    documents: [
      {
        id: '052152cd-8bbf-460e-af85-1d02f7f97cbd',
        expedient: '3671917211',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '75646346-64a4-46a7-800a-7c1089c8146c',
        expedient: '3671917211',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'd3e6c416-d673-4cbb-a069-db61b753b968',
        name: 'CARBAMAZEPINA',
      },
    ],
  },
  {
    id: 'da62bcff-f1fa-4cac-a73c-73682f257045',
    name: 'ALPRAZOLAM',
    published_at: '2021-02-08T16:50:48.000Z',
    company: 'ACHÉ LABORATÓRIOS FARMACÊUTICOS S.A',
    documents: [
      {
        id: '137569e6-466b-4bbc-a087-74f64f87eba1',
        expedient: '0514500217',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'fd00cb18-5001-42f8-8893-e75ca1d7e516',
        expedient: '0514500217',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'c3ba72cf-2e5c-4338-b387-96e65f976492',
        name: 'FUROSEMIDA',
      },
    ],
  },
  {
    id: 'afbd1b6c-fe7d-4d96-b154-be99593f27d5',
    name: 'AMOXICILINA',
    published_at: '2022-08-04T11:37:04.000Z',
    company: 'LABORATÓRIO TEUTO BRASILEIRO S/A',
    documents: [
      {
        id: '575f3859-90c2-48ca-8c0a-e81a8b438ddd',
        expedient: '2245243175',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '61393bdd-5c61-4869-a3d5-84835e4e6274',
        expedient: '2245243175',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '69f3fdd7-538e-494e-b3cb-bbf3f5ec4a46',
        name: 'TIGECICLINA',
      },
    ],
  },
  {
    id: 'd2529732-2e13-429d-b2d4-72d35562bf7e',
    name: 'AMOXICILINA',
    published_at: '2023-06-07T14:35:11.000Z',
    company: 'GERMED FARMACEUTICA LTDA',
    documents: [
      {
        id: '4324a3ab-f80c-4b22-87e4-e25344353ec0',
        expedient: '0583272231',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '761c29b4-ecf7-4fa0-8999-ad9e4dbb9755',
        expedient: '0583272231',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '928cc693-7a08-4f96-85a9-2dc49e7bcd4f',
        name: 'IBUPROFENO',
      },
    ],
  },
  {
    id: 'd9524311-9b56-4dbc-b904-c208ca1fea3e',
    name: 'AMOXICILINA',
    published_at: '2023-05-16T14:50:49.000Z',
    company: 'EMS S/A',
    documents: [
      {
        id: '3a8f7273-45a7-41b9-888b-96b027bce10d',
        expedient: '0494798238',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'f9765c00-4532-462b-918b-6c84a0c03dbb',
        expedient: '0494798238',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '4fc9f1ae-5503-4974-b7e5-86d41af32f46',
        name: 'MALEATO DE DEXCLORFENIRAMINA',
      },
    ],
  },
  {
    id: 'c3fadb4e-caa2-4774-aa9c-5a422b4034cf',
    name: 'AMOXICILINA',
    published_at: '2022-07-27T15:49:38.000Z',
    company: 'MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA',
    documents: [
      {
        id: '9ca6798f-4c42-4505-b38c-0329778b38d4',
        expedient: '4458912224',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'f6d9fa44-3533-4f72-b7e3-f5ed5a01e274',
        expedient: '4458912224',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '52b6792f-0330-421f-b155-a27f418ffb4d',
        name: 'TADALAFILA',
      },
    ],
  },
  {
    id: 'bf501432-497d-4395-8e0e-be2beb9c89a2',
    name: 'AMOXICILINA',
    published_at: '2022-07-27T20:20:14.000Z',
    company: 'LEGRAND PHARMA INDÚSTRIA FARMACÊUTICA LTDA',
    documents: [
      {
        id: '1717b1bb-8ce1-4bb7-a8ca-ae290c8ce2b7',
        expedient: '3203969197',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'a2f59437-a109-4449-ac45-a29b8c858cfd',
        expedient: '3203969197',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '378b43c0-a16d-4217-aae5-89f846eb4d43',
        name: 'CLORIDRATO DE DONEPEZILA',
      },
    ],
  },
  {
    id: 'b9bfc099-a71e-45a2-989d-dd7d4ad20e28',
    name: 'AMOXICILINA TRI-HIDRATADA',
    published_at: '2022-08-09T15:51:48.000Z',
    company: 'ACHÉ LABORATÓRIOS FARMACÊUTICOS S.A',
    documents: [
      {
        id: '11d8e4c1-1939-4568-b153-56da6d32162d',
        expedient: '0304350199',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'b4bf7269-123d-4877-8053-89f2f1a8373c',
        expedient: '0304350199',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '4588c498-8d9c-4e89-9433-d24b9df5e659',
        name: 'BESILATO DE ANLODIPINO',
      },
    ],
  },
  {
    id: 'cea5751e-600e-4894-a577-8a95ef13da8c',
    name: 'AMOXICILINA',
    published_at: '2022-08-16T18:24:08.000Z',
    company: 'BRAINFARMA INDÚSTRIA QUÍMICA E FARMACÊUTICA S.A',
    documents: [
      {
        id: '7632b467-1405-4948-8537-5cf872458a74',
        expedient: '0199143154',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'f477e96f-9f85-4566-9533-c5c68a160a26',
        expedient: '0199143154',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'ef568c1b-a887-4c42-93cb-1d11af271bc5',
        name: 'CAPTOPRIL',
      },
    ],
  },
  {
    id: 'ae0fa063-66a9-4cdf-b920-62742ee2b72e',
    name: 'ANAFRANIL',
    published_at: '2021-04-01T17:09:33.000Z',
    company: 'NOVARTIS BIOCIENCIAS S.A',
    documents: [
      {
        id: '4453e1c6-d1a7-41f1-bc96-1e5a9b229e67',
        expedient: '0024722157',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'fe21fbfc-5bcd-4e79-b207-9496f79a2328',
        expedient: '0024722157',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '802ccb1c-5499-4c73-8f0a-af81137168ad',
        name: 'ALFACORIOGONADOTROPINA',
      },
    ],
  },
  {
    id: '2b52d716-b7d4-4e89-8c23-856b1870df73',
    name: 'AMOXICILINA',
    published_at: '2023-06-07T14:16:27.000Z',
    company: 'EMS S/A',
    documents: [
      {
        id: 'aeca6992-021e-4445-a5aa-3f915581182c',
        expedient: '0583187234',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'ca5a33fb-fe42-4b8b-a967-c379368a2285',
        expedient: '0583187234',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'd9ba4a5c-f812-4a32-ab89-688ceb09990e',
        name: 'VALSARTANA',
      },
      {
        id: '6c79de3c-1c87-4ab5-9a88-32901790c16b',
        name: 'CLAVULANATO DE POTÁSSIO',
      },
    ],
  },
  {
    id: '7bdaf271-f8b0-4bfc-9860-0f83fb8d57e2',
    name: 'AMOXICILINA',
    published_at: '2023-02-09T15:05:48.000Z',
    company: 'GERMED FARMACEUTICA LTDA',
    documents: [
      {
        id: '5b1ca0f3-dd4f-4129-b07f-08b4c080a853',
        expedient: '0136639232',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'b65b5ea1-ae08-4c38-9432-d5b44cf1c684',
        expedient: '0136639232',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '2b0dedbc-f9b4-470b-b7e5-2869ab5334ab',
        name: 'CLORIDRATO DE SERTRALINA',
      },
    ],
  },
  {
    id: '76061abe-7ce6-48e7-8d2e-c855f499caab',
    name: 'ACETONIDO DE TRIANCINOLONA+SULFATO DE NEOMICINA+GRAMICIDINA+NISTATINA',
    published_at: '2022-12-08T18:51:22.000Z',
    company: 'EMS S/A',
    documents: [
      {
        id: '608afff1-279a-45c8-8320-3f792f9fa6fe',
        expedient: '5028539227',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: '6110ac81-03d3-43bc-98c9-98ed02d25545',
        expedient: '5028539227',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: '36008ff3-ac98-4c0b-8928-5ac545ea2fc4',
        name: 'FLURBIPROFENO',
      },
    ],
  },
  {
    id: '8811bc81-95a9-40d8-8d09-2c9de89b5ae1',
    name: 'ACHEFLAN',
    published_at: '2022-12-06T12:37:44.000Z',
    company: 'ACHÉ LABORATÓRIOS FARMACÊUTICOS S.A',
    documents: [
      {
        id: '8bbea11a-1a2f-40ee-822e-3298645a6e36',
        expedient: '5018240229',
        type: 'PROFESSIONAL',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
      {
        id: 'e4a1efbf-cd9e-4d15-afc1-ae8b4aaffc04',
        expedient: '5018240229',
        type: 'PATIENT',
        url: 'http://localhost:3000/pdf_sample.pdf',
      },
    ],
    active_principles: [
      {
        id: 'cb7f7386-5bff-48b6-a8fc-952a506e4061',
        name: 'FÍMBRIAS',
      },
    ],
  },
];

export { dataMock };
