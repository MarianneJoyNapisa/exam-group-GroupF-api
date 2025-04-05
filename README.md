# exam-group-GroupF-api

NAPISA - Leader, POST
ROSAL - GET
MAGSAYO - PUT

POST:

http://localhost:3000/api/exams

input:
  {
    "id": "3",
    "subject": "INTPROG",
    "date": "2025-04-05"
  }

output:
    {
    "id": "3",
    "subject": "INTPROG",
    "date": "2025-04-05"
    }

GET:
http://localhost:3000/api/exams

output:
{
  "message": "Group F API",
  "exams": [
    {
      "id": "1",
      "subject": "Filipino",
      "date": "2025-05-10"
    },
    {
      "id": "2",
      "subject": "Rizal",
      "date": "2025-05-15"
    },
    {
      "id": "3",
      "subject": "INTPROG",
      "date": "2025-04-05"
    }
  ]
}

PUT:
http://localhost:3000/api/exams/1

input:
  {
    "id": "1",
    "subject": "NSTP 101",
    "date": "2025-04-05"
  }

output:
{
  "id": "1",
  "subject": "NSTP 101",
  "date": "2025-04-05"
}

GET:
http://localhost:3000/api/exams

final output:
{
  "message": "Group F API",
  "exams": [
    {
      "id": "1",
      "subject": "NSTP 101",
      "date": "2025-04-05"
    },
    {
      "id": "2",
      "subject": "Rizal",
      "date": "2025-05-15"
    },
    {
      "id": "3",
      "subject": "INTPROG",
      "date": "2025-04-05"
    }
  ]
}