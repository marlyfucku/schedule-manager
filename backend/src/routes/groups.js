import { getGroups } from '../controllers/groups.js'

export default async function teachersRoutes(fastify) {
  fastify.get('/groups', async (req, reply) => {
    const groups = await getGroups(fastify)
    reply.send(groups)
  })

  fastify.get('/groups/lessons', async (req, reply) => {
    // const { teacher, date } = req.query
    reply.send(`{
    "startDate": "2026-03-30T00:00:00Z",
    "endDate": "2026-04-05T00:00:00Z",
    "group": {
        "id": 16,
        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
    },
    "bells": [
        {
            "weekday": 1,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 1,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 2,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 3,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 4,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        },
        {
            "weekday": 5,
            "lesson": 8,
            "startTime": "20:40",
            "endTime": "22:10",
            "startTimeMin": 1240,
            "endTimeMin": 1330,
            "gridId": 34241,
            "scheduleId": 109,
            "publication": null
        }
    ],
    "lessons": [
        {
            "id": "1ad4a6bb-5c51-4674-aa73-d20a93980dd3",
            "weekday": 2,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "unionGroups": [
                {
                    "id": "4b5f3087-d1ab-4df1-9a03-e7c016185f0e",
                    "group": {
                        "id": 115,
                        "name": "01-23.ИСИП.ОД.9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "71bb93f0-723f-4bb1-a7b6-5d495cba92bf",
                    "group": {
                        "id": 205,
                        "name": "01-24.ИСИП.ОФ.11-РНД"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "dfcedd71-3699-44d8-8653-70f52fed13a8",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 120,
                    "fio": "Трясцын А.Ю.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 32,
                "name": "МДК.02.03 Математическое моделирование",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": {
                "id": 73,
                "name": "524",
                "shortName": "524",
                "ignore": false,
                "publication": null
            }
        },
        {
            "id": "3e892e48-845f-495c-a93b-23914624a68b",
            "weekday": 2,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "unionGroups": [
                {
                    "id": "0ebe2451-e693-4417-b683-1abc5fa942f0",
                    "group": {
                        "id": 115,
                        "name": "01-23.ИСИП.ОД.9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "686dac95-bd9b-4b2c-b870-8bb1f2404546",
                    "group": {
                        "id": 205,
                        "name": "01-24.ИСИП.ОФ.11-РНД"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "ebcd15b7-2e6e-4f87-bbdb-b30647439a2f",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 13,
                    "fio": "Кондратьев И.А.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 62,
                "name": "Физическая культура",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "59af96bf-8499-4899-88d2-a7fa0a2c8026",
            "weekday": 1,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "unionGroups": [
                {
                    "id": "04badeb5-8d43-40aa-b5ab-caad1f0e57b7",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "75ee3773-0d7d-43be-8334-9610be75f6d1",
            "weekday": 3,
            "lesson": 6,
            "startTime": "17:35",
            "endTime": "19:05",
            "startTimeMin": 1055,
            "endTimeMin": 1145,
            "unionGroups": [
                {
                    "id": "3af244a9-0ed8-4f41-bba2-4448bb04e66f",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 50,
                    "fio": "Луговой Ф.С.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 151,
                "name": "МДК.01.04 Системное программирование",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "794d432b-2fc6-435e-b890-efd970929f2c",
            "weekday": 4,
            "lesson": 2,
            "startTime": "10:40",
            "endTime": "12:10",
            "startTimeMin": 640,
            "endTimeMin": 730,
            "unionGroups": [
                {
                    "id": "d17c236f-ca80-443d-a7c4-6fb6801f9bb8",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "7a18d8c1-96c9-4bbb-ad67-7b8ba0f531b9",
            "weekday": 2,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "unionGroups": [
                {
                    "id": "f4c40102-626d-43f3-a21f-89219e885dba",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 98,
                    "fio": "Гущина М.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 83,
                "name": "Кураторский час",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "82fe01d7-d524-43aa-9616-a06609b90727",
            "weekday": 1,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "unionGroups": [
                {
                    "id": "310a6509-d503-4d32-ad3c-1252c1922de2",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 24,
                "name": "МДК.01.01 Разработка программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "873819f2-872a-4f4e-abb2-e52033bef7af",
            "weekday": 5,
            "lesson": 4,
            "startTime": "14:20",
            "endTime": "15:50",
            "startTimeMin": 860,
            "endTimeMin": 950,
            "unionGroups": [
                {
                    "id": "c95b9c88-768f-47f9-832a-bd69be599b28",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 50,
                    "fio": "Луговой Ф.С.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 151,
                "name": "МДК.01.04 Системное программирование",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "9964893e-2a63-4ef8-9786-021b44724b41",
            "weekday": 1,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "unionGroups": [
                {
                    "id": "6b6ee83c-4ffc-4050-ae13-13b609587ae1",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "6fd568f0-acf8-4fe2-b82f-ff31674fd1da",
                    "group": {
                        "id": 205,
                        "name": "01-24.ИСИП.ОФ.11-РНД"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                },
                {
                    "id": "a7a2b588-fb01-420c-995c-9a355cf83175",
                    "group": {
                        "id": 115,
                        "name": "01-23.ИСИП.ОД.9"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 195,
                    "fio": "Муравьев П. П.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 158,
                "name": "МДК.04.03 Основы продакт-менеджмента",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "a5b3fbfc-f8a0-4b0e-85d0-88957b0eef71",
            "weekday": 5,
            "lesson": 5,
            "startTime": "16:00",
            "endTime": "17:30",
            "startTimeMin": 960,
            "endTimeMin": 1050,
            "unionGroups": [
                {
                    "id": "f41ca5be-d6e5-4a36-839e-6366354f093c",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 164,
                    "fio": "Лаврентьева А.И.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 10,
                "name": "Иностранный язык в профессиональной деятельности",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": {
                "id": 74,
                "name": "525",
                "shortName": "525",
                "ignore": false,
                "publication": null
            }
        },
        {
            "id": "e7df2be6-5bea-4254-ba8f-f6301eb69560",
            "weekday": 3,
            "lesson": 7,
            "startTime": "19:05",
            "endTime": "20:35",
            "startTimeMin": 1145,
            "endTimeMin": 1235,
            "unionGroups": [
                {
                    "id": "9902afd8-0180-4310-a01a-1b127433c753",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 50,
                    "fio": "Луговой Ф.С.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 151,
                "name": "МДК.01.04 Системное программирование",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "ed543da1-9e9d-41ff-9f73-83bf030e50e5",
            "weekday": 4,
            "lesson": 3,
            "startTime": "12:40",
            "endTime": "14:10",
            "startTimeMin": 760,
            "endTimeMin": 850,
            "unionGroups": [
                {
                    "id": "ad872110-10df-431a-bb04-3968bced3332",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 170,
                    "fio": "Сизов С.Е",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 33,
                "name": "МДК.11.01 Технология разработки и защиты баз данных",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        },
        {
            "id": "eea4f00b-f4e1-46d0-ac61-8400ee81c57b",
            "weekday": 2,
            "lesson": 1,
            "startTime": "09:00",
            "endTime": "10:30",
            "startTimeMin": 540,
            "endTimeMin": 630,
            "unionGroups": [
                {
                    "id": "0b830532-d7fa-4a5a-8e51-4fa6e613b17c",
                    "group": {
                        "id": 16,
                        "name": "01-24.ИСИП.ОД.11, 15.ИСИП.24.ОФ.С.3.ХК.Д"
                    },
                    "subgroup": null,
                    "divisionId": null,
                    "countDivisions": null
                }
            ],
            "teachers": [
                {
                    "id": 4,
                    "fio": "Баграмов Н.М.",
                    "position": null,
                    "lessons": null,
                    "publication": null
                }
            ],
            "typeLesson": null,
            "subject": {
                "id": 25,
                "name": "МДК.01.02 Поддержка и тестирование программных модулей",
                "infoUrl": null,
                "publication": null
            },
            "cabinet": null
        }
    ]
}`)
  })
}
