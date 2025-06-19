"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DateRangePicker } from "./DateRangePicker"

export type employeeData = {
  id: string
  fullName: string
  status: "ĐANG LÀM" | "ĐÃ NGHỈ"
  bankAccount: string
  bankName: string
  totalTime: number
  amount: number
}

const employees: employeeData[] = [
  {
    id: "emp001",
    fullName: "Nguyễn Văn A",
    status: "ĐANG LÀM",
    bankAccount: "123456789012",
    bankName: "Vietcombank",
    totalTime: 120,
    amount: 5000000,
  },
  {
    id: "emp002",
    fullName: "Trần Thị B",
    status: "ĐANG LÀM",
    bankAccount: "987654321098",
    bankName: "Techcombank",
    totalTime: 100,
    amount: 4200000,
  },
  {
    id: "emp003",
    fullName: "Phạm Văn C",
    status: "ĐÃ NGHỈ",
    bankAccount: "456789123456",
    bankName: "Vietinbank",
    totalTime: 85,
    amount: 3000000,
  },
  {
    id: "emp004",
    fullName: "Lê Thị D",
    status: "ĐANG LÀM",
    bankAccount: "321654987123",
    bankName: "Vietcombank",
    totalTime: 135,
    amount: 6200000,
  },
  {
    id: "emp005",
    fullName: "Hoàng Văn E",
    status: "ĐANG LÀM",
    bankAccount: "654321789654",
    bankName: "MBBank",
    totalTime: 95,
    amount: 3900000,
  },
  {
    id: "emp006",
    fullName: "Hoàng Văn F",
    status: "ĐANG LÀM",
    bankAccount: "654321789654",
    bankName: "MBBank",
    totalTime: 95,
    amount: 3900000,
  },
  {
    id: "emp007",
    fullName: "Ngô Thị G",
    status: "ĐANG LÀM",
    bankAccount: "112233445566",
    bankName: "ACB",
    totalTime: 110,
    amount: 4500000,
  },
]

export const columns: ColumnDef<employeeData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Chọn tất cả"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Chọn dòng"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Họ tên <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("fullName")}</div>,
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "bankName",
    header: "Ngân hàng",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bankName")}</div>
    ),
  },
  {
    accessorKey: "bankAccount",
    header: "Số tài khoản",
    cell: ({ row }) => <div>{row.getValue("bankAccount")}</div>,
  },
  {
    accessorKey: "totalTime",
    header: "Số giờ",
    cell: ({ row }) => <div>{row.getValue("totalTime")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Lương</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const employee = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Mở menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hành động</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(employee.id)}
            >
              Sao chép mã nhân viên
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function TableData() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <div className="flex justify-center items-end space-x-4">
          <DateRangePicker labelContent="Từ ngày" />
          <DateRangePicker labelContent="Đến ngày" />
          <Button className="bg-red-700">Lọc</Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Cột hiển thị <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Không có kết quả.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="text-sm text-muted-foreground">
          Đã chọn {table.getFilteredSelectedRowModel().rows.length} /{" "}
          {table.getFilteredRowModel().rows.length} dòng.
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">
            Trang {table.getState().pagination.pageIndex + 1} /{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Trước
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Tiếp
          </Button>
          
        </div>
      </div>
    </div>
  )
}
