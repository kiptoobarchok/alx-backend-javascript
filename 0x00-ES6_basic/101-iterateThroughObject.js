export default function iterateThroughObject(reportWithIterator) {
    const employees = [...reportWithIterator]; // Spread iterator into an array
    return employees.join(' | '); // Join employees with ' | ' separator
  }
  