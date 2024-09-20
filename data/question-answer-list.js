const qnaList = [
  {
    que: "When do I start getting paid sick time?",
    ans: "Accumulation of sick leave will start at the first day of employment; however, sick leave pay will not be granted until the completion of the 90-day probationary period.",
  },
  {
    que: "When am I eligible for my sick time?",
    ans: "Accumulation of sick leave will start at the first day of employment; however, sick leave pay will not be granted until the completion of the 90-day probationary period.",
  },
  {
    que: "Do I get paid sick time if I am a per diem employee?",
    ans: "It is the policy of SISU Healthcare Solutions to provide paid sick leave for employees who work a minimum of 40 hours per week.",
  },
  {
    que: "Do I get paid sick time if I am a part time employee?",
    ans: "It is the policy of SISU Healthcare Solutions to provide paid sick leave for employees who work a minimum of 40 hours per week.",
  },
  {
    que: "How much sick time do I get per year?",
    ans: "Full-time employees who work 40 or more hours per week will receive sick leave at a rate of 40 hours per year. Sick time is loaded into each employee’s sick time bank on January 1st of each year.",
  },
  {
    que: "Does my sick time roll over?",
    ans: "Sick leave will not be transferred from year to year. Employees on sick leave will not accumulate additional sick leave or vacation pay during the time they are sick. Unused sick leave will be forfeited upon termination.",
  },
  {
    que: "What if I don't use all of my sick time?",
    ans: "Sick leave will not be transferred from year to year. Employees on sick leave will not accumulate additional sick leave or vacation pay during the time they are sick. Unused sick leave will be forfeited upon termination.",
  },
  {
    que: "My child is sick, can I use my sick time?",
    ans: "Employees may use sick leave for personal or immediate family illness or accident. The immediate family is defined as spouse, children, mother, and father. Employees will be paid for the actual amount of time they are absent from work, provided it is accrued.",
  },
  {
    que: "I am out of sick time, can I use future sick time?",
    ans: "Sick leave cannot be borrowed in advance. Management may request that an employee provide physician documentation of illness/condition, whether due to the employee's illness or illness of an immediate family member.",
  },
  {
    que: "Do I get vacation time as a part time employee?",
    ans: "Paid vacation time is for full-time employees during periods of active, full-time, employment.",
  },
  {
    que: "Do I get vacation time as a per diem employee?",
    ans: "Paid vacation time is for full-time employees during periods of active, full-time, employment.",
  },
  {
    que: "How much vacation time do I get?",
    ans: "How long have you worked at Sisu?",
    replies: [
      {
        que: "1 year",
        ans: "2 weeks of vacation for eligible employees",
      },
      {
        que: "2 years",
        ans: "2 weeks of vacation for eligible employees",
      },
      {
        que: "3 years",
        ans: "2 weeks of vacation for eligible employees",
      },
      {
        que: "4 years",
        ans: "3 weeks of vacation for eligible employees",
      },
      {
        que: "5 years",
        ans: "3 weeks of vacation for eligible employees",
      },
    ],
  },
  {
    que: "What happens if I don't use all my vacation time?",
    ans: "How long have you worked at Sisu?",
    replies: [
      {
        que: "1 year",
        ans: "Employees who have completed years 1-4 may carry over a maximum of 40 hours to the next year with a cap of 3 total weeks of vacation in any given year. Any vacation exceeding 3 weeks will be forfeited by the employee.",
      },
      {
        que: "2 years",
        ans: "Employees who have completed years 1-4 may carry over a maximum of 40 hours to the next year with a cap of 3 total weeks of vacation in any given year. Any vacation exceeding 3 weeks will be forfeited by the employee.",
      },
      {
        que: "3 years",
        ans: "Employees who have completed years 1-4 may carry over a maximum of 40 hours to the next year with a cap of 3 total weeks of vacation in any given year. Any vacation exceeding 3 weeks will be forfeited by the employee.",
      },
      {
        que: "4 years",
        ans: "Employees who have completed years 4-5+ may carry over a maximum of 40 hours to the next year with a cap of 4 total weeks of vacation in any given year. Any vacation exceeding 4 weeks will be forfeited by the employee.",
      },
      {
        que: "5 years",
        ans: "Employees who have completed years 4-5+ may carry over a maximum of 40 hours to the next year with a cap of 4 total weeks of vacation in any given year. Any vacation exceeding 4 weeks will be forfeited by the employee.",
      },
    ],
  },
  {
    que: "How far in advance do I need to request vacation time?",
    ans: "Vacation time must be scheduled in writing to the employee’s immediate manager/ supervisor at least one week in advance.",
  },
  {
    que: "Is my vacation time guaranteed?",
    ans: "The use and duration of vacation time is subject to supervisory approval.  The Company will make every effort to accommodate requests to schedule vacation time but reserves the right to prioritize requests based on business needs, the seniority of the employees requesting vacation time and the good judgment of the supervisor/ manager.",
  },
  {
    que: "Can I take one hour of vacation?",
    ans: "If you have completed at least one year of employment, vacation time may be taken in increments as small as one hour. However, vacation time may not be used to compensate employees for tardiness, unexcused absences or for sick time.",
  },
  {
    que: "I didn't show up for work today, can I use my vacation time?",
    ans: "vacation time may not be used to compensate employees for tardiness, unexcused absences or for sick time.",
  },
  {
    que: "Am I eligible for paid vacation?",
    ans: "Are you a full time employee with at least one year of employment at Sisu?",
    replies: [
      {
        que: "yes",
        ans: "It is the policy of SISU Healthcare Solutions to provide vacation for full-time employees who work a minimum of 40 hours per week. Paid vacation time is for full-time employees during periods of active, full-time, employment.  Paid vacation time does not accumulate during an employee’s personal leave of absence or periods of administrative leave. Employees will earn vacation time from their first day of employment but are not eligible to use the accrued time during the probation period to include any extensions to the probation.",
      },
      {
        que: "no",
        ans: "It is the policy of SISU Healthcare Solutions to provide vacation for full-time employees who work a minimum of 40 hours per week. Paid vacation time is for full-time employees during periods of active, full-time, employment.  Paid vacation time does not accumulate during an employee’s personal leave of absence or periods of administrative leave. Employees will earn vacation time from their first day of employment but are not eligible to use the accrued time during the probation period to include any extensions to the probation.",
      },
    ],
  },
  {
    que: "If I quit, will I get my paid vacation time?",
    ans: "Employees who resign or are terminated, will not be eligible for a payout of vacation time. Vacation days will not be considered as time worked for purposes of calculating overtime. Vacation time cannot be used during a termination notice.",
  },
  {
    que: "If I get fired, will I get my paid vacation time?",
    ans: "Employees who resign or are terminated, will not be eligible for a payout of vacation time. Vacation days will not be considered as time worked for purposes of calculating overtime. Vacation time cannot be used during a termination notice.",
  },
  {
    que: "If there is a holiday on my vacation do I use a vacation day?",
    ans: "If a holiday occurs during employee’s vacation period, holiday pay will be earned at employee’s regular rate of pay and no vacation time will be used for that day.",
  },
  {
    que: "If I take a leave of absence, will I still get my accrued vacation time?",
    ans: "Paid vacation time does not accumulate during an employee’s personal leave of absence or periods of administrative leave.",
  },
  {
    que: "What are the responsibilities of managers when it comes to vacation requests?",
    ans: "A: Managers are responsible for receiving vacation requests, reviewing and approving or denying them, providing documented confirmation, and monitoring vacation time. They must also inform Payroll of any changes or revisions to approved vacation plans.",
  },
  {
    que: "Can my manager deny my vacation request?",
    ans: "Yes, vacation requests are subject to supervisory approval, and the company reserves the right to prioritize based on business needs and seniority. If a mutually acceptable time cannot be found, the company may decide when you will take your vacation.",
  },
  {
    que: "How do I schedule vacation time?",
    ans: "Vacation requests must be submitted in writing to your immediate manager or supervisor at least one week in advance. Approval of vacation time is subject to the supervisor’s discretion and business needs.",
  },
  {
    que: "Can I use vacation time to cover tardiness or unexcused absences?",
    ans: "No, vacation time cannot be used to compensate for tardiness, unexcused absences, or sick time.",
  },
  {
    que: "What is the vacation policy?",
    ans: "Sisu Healthcare Solutions provides paid vacation for full-time employees who work a minimum of 40 hours per week. Employees earn vacation from their first day of employment, but vacation cannot be used during the probationary period or any extensions. Vacation scheduling requires mutual agreement between employees and their supervisors.",
  },
  {
    que: "Can I take vacation in small increments?",
    ans: "Yes, vacation can be taken in increments as small as one hour, but cannot be used for tardiness or sick time.",
  },
];

const REPLY_NOT_READY = "I am sorry, Not ready for this question yet.";

const REPLY_NO_ANSWER = "I am sorry, I have no answer for your information.";

module.exports = { qnaList, REPLY_NOT_READY, REPLY_NO_ANSWER };
