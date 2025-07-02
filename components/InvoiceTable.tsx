export default function InvoiceTable() {
  const invoices = [
    { no: 'PQ-4491C', date: '3 Jul, 2020', client: 'Daniel Padilla', amount: '$2,450', status: 'PAID' },
    { no: 'IN-9911J', date: '21 May, 2021', client: 'Christina Jacobs', amount: '$1,410', status: 'OVERDUE' },
    { no: 'UV-2319A', date: '14 Apr, 2020', client: 'Elizabeth Bailey', amount: '$450', status: 'PAID' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Recent Invoices</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400">
            <th className="text-left py-1">No</th>
            <th className="text-left">Date Created</th>
            <th className="text-left">Client</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{invoice.no}</td>
              <td>{invoice.date}</td>
              <td>{invoice.client}</td>
              <td>{invoice.amount}</td>
              <td className={`font-semibold ${invoice.status === 'PAID' ? 'text-green-600' : 'text-red-500'}`}>
                {invoice.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}