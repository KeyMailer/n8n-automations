// react
import React, { useState, useEffect } from "react";

// shadcn - components
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// lucide-react icons
import { Search, CircleQuestionMark, X } from "lucide-react";

// automation data/types
import { automations } from "@/lib/automations-data";
import type { AutomationStatus } from "@/lib/automations-data";

// react-router-dom
import { Link } from "react-router-dom";

export default function TableData() {
  // search state
  const [search, setSearch] = useState("");

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // maximum row per page

  // filter button state
  const [statusFilter, setStatusFilter] = useState<AutomationStatus | "all">(
    "all",
  );

  // filter button statuses
  const statuses: { value: AutomationStatus | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  // automation data filteration
  const filteredAutomations = automations.filter((a) => {
    // status button filter
    const matchesStatus =
      statusFilter === "all" ? true : a.status === statusFilter;

    // search by NAME only (case insensitive)
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  // pagination calculations
  const totalPages = Math.ceil(filteredAutomations.length / itemsPerPage);
  const paginatedAutomations = filteredAutomations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // pagination: calculate current showing range (e.g., Showing 11 to 20 of 23 automations)
  const startItem =
    filteredAutomations.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(
    currentPage * itemsPerPage,
    filteredAutomations.length,
  );
  const totalItems = filteredAutomations.length;

  // reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, search]);

  return (
    <React.Fragment>
      {/* START - search and filter */}
      <div className=" md:flex justify-between items-center">
        {/*search input */}
        <div className="relative md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search automation name"
            className="px-10 text-sm dark:bg-background"
          />

          {search && (
            <X
              size={18}
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground"
            />
          )}
        </div>

        {/*filter button */}
        <div className="flex items-center gap-1.5 overflow-x-auto mt-3 md:mt-0">
          {statuses.map((s) => (
            <button
              key={s.value}
              onClick={() => setStatusFilter(s.value)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                statusFilter === s.value
                  ? "bg-[#E3496D] text-white"
                  : "bg-[#EAEAEA] dark:bg-[#171717] hover:bg-secondary/80"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      {/* END - search and filter */}

      {/* START - table */}
      <div className="my-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-2 ">
                  Name
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleQuestionMark
                        size={14}
                        className="text-text-color mt-0.5 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Name and description of the AI workflow.</p>
                      <p>Click the name to view the overview.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 ">
                  Trigger
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleQuestionMark
                        size={14}
                        className="text-text-color mt-0.5 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        In n8n, a trigger decides how the workflow will start.
                        It is the workflow's starting point.
                      </p>
                      <p>Click the trigger to get started.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 ">
                  Document
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleQuestionMark
                        size={14}
                        className="text-text-color mt-0.5 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        The document is where you can enter your input or view
                        the output.
                      </p>
                      <p>Click the document to get started.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 ">
                  Tools
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleQuestionMark
                        size={14}
                        className="text-text-color mt-0.5 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Tools integrated with this workflow alongside n8n.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 ">
                  Status
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleQuestionMark
                        size={14}
                        className="text-text-color mt-0.5 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Active means the workflow is production-ready, while
                        inactive means the workflow is currently down.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAutomations.length > 0 ? (
              paginatedAutomations.map((auto) => (
                <TableRow key={auto.id}>
                  <TableCell className="flex flex-col max-w-xs">
                    <Link
                      to={`/automation/${auto.id}`}
                      title={`${auto.name} overview`}
                      className="hover:text-[#E3496D]"
                    >
                      {auto.name}
                    </Link>
                    <span className="text-xs text-muted-foreground line-clamp-1 text-ellipsis">
                      {auto.description}
                    </span>
                  </TableCell>
                  <TableCell>
                    {auto.triggerLink ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        href={auto.triggerLink}
                        className="cursor-pointer hover:text-[#E3496D]"
                      >
                        {auto.trigger}
                      </a>
                    ) : (
                      <span className="cursor-not-allowed text-text-color ">
                        {auto.trigger}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {auto.documentLink ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        href={auto.documentLink}
                        className="cursor-pointer hover:text-[#E3496D]"
                      >
                        {auto.document}
                      </a>
                    ) : (
                      <span className="cursor-not-allowed text-text-color ">
                        {auto.document}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {auto.tools.slice(0, 3).map((tool, index) => (
                        <span
                          key={index}
                          className="bg-[#EAEAEA] dark:bg-muted px-2 py-1 rounded-md text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`text-xs capitalize px-2 py-1 rounded-md font-medium ${
                        auto.status === "active"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {auto.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-5 text-sm text-muted-foreground"
                >
                  No automation name found. You can try{" "}
                  <a className="text-[#E3496D] cursor-pointer font-medium">
                    requesting
                  </a>{" "}
                  a personalized automation. If this is a mistake, please ask
                  Justin in the #workflow_automation channel on Slack.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* END - table */}

      {/* START - pagination */}
      <div className="md:flex justify-between items-center">
        <div className="text-center mb-5 md:mb-0 md:text-left">
          <h1 className="text-sm">
            Showing <span>{startItem}</span> to <span>{endItem}</span> of{" "}
            <span>{totalItems}</span> automations
          </h1>
        </div>

        <Pagination className="mx-auto flex w-full justify-center md:mx-0 md:block md:w-fit md:justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      {/* END - pagination */}
    </React.Fragment>
  );
}
