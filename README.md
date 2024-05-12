<h1 align="center">Work orders filtering</h1>
<p align="center">
<img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" >
<img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/-MaterialUI-0081CB?style=flat-square&logo=material-ui">
</p>
<h1 align="center">
	<img width="1440" alt="dynamic-filtering" src="https://github.com/GaurangiM/work-orders/assets/32289626/3f2d188c-7904-4897-8025-b587b04bc548">
</h1>
<h3>FieldBuddy is a solution for technicians in the field, replacing the paper-based way of working with a digital workflow.Technicians receive Work Orders (tasks to perform at a location), for example resolving failures in a broken installation.Technicians have an overview of Work Orders and want to filter their Work Orders so they can work as efficient as possible.
</h3>

---
## Features
- An administrator can configure filters that are displayed to a technician in his application.
- Filters can be simple
  - Status = ‘Open’
  - Status = ‘Open’ AND Color = ‘Blue’
- Filters support special methods, one of them is “AskUser” which will requires user input for a field before applying the filter. If a filter requires input, the technician should get a pop-up in which he enters the input.
- Filters and orders are stored in JSON files.

## Technologies & libraries
- React JS
- Typescript
- Material UI: this React component library is used to implement `Select` dropdown component
- REACT MULTISELECT DROPDOWN: this React component is used which provides multi select functionality with various features like selection and grouping

## Technical details
- Filters are stored in `filters.ts` file under `data` folder
- Orders are stored in `orders.ts` file under `data` folder
- For state management, `useState hook` is used
- All comonents are class components, exception is `work-order` component which is a functional component

## Setup
Clone this repo to your desktop and run `npm install` to install all the dependencies.

---

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run  `npm start` to start the application. You will then be able to access it at localhost:3000


---

