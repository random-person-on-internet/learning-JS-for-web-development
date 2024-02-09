// filter function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = arr.filter((number) => number % 2 === 0);
let oddNumbers = arr.filter((number) => number % 2 != 0);
console.log(`${oddNumbers} \n${evenNumbers}`);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const techCompanies = companies.filter(
  (company) => company.category === "Technology"
);
console.log(techCompanies);

const after1990companies = companies.filter((company) => company.start >= 1990);
console.log(after1990companies);

// mapping function
const squaredArray = arr.map((number) => number * number);
console.log(squaredArray);

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

const companyNameAndCategory = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyNameAndCategory);

const startAndEndDate = companies.map((company) => {
  return [company.start, company.end];
});
console.log(startAndEndDate);

for (let i = 0; i < 10; i++) {
  console.log(`${companyNames[i]} => ${startAndEndDate[i]}`);
}
