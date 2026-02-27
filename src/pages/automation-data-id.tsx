// react-router-dom
import { Link, useParams } from "react-router-dom";

// automation data
import { automations } from "@/lib/automations-data";

// shadcn ui components
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// lucide-react icons
import { CircleQuestionMark, Link2, MoveLeft, Link2Off } from "lucide-react";

export default function AutomationDataId() {
  const { id } = useParams();

  const automation_data = automations.find((auto) => auto.id === id);

  // show this if the data does not exist
  if (!automation_data) {
    return (
      <div className="text-center py-10">
        <h1 className="text-xl font-semibold">Automation not found</h1>
        <p className="text-sm text-gray-500">
          This automation does not exist or was deleted.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 xl:pb-5 xl:pt-0 xl:px-0 mx-auto 2xl:max-w-7xl">
      {/* navigate to home */}
      <Link
        to={"/"}
        className="flex items-center gap-2 text-sm mb-8 hover:opacity-80"
      >
        <MoveLeft size={15} /> Back Home
      </Link>

      <div className="data_overview border-b border-accent pb-10">
        {/* name */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-3xl">{automation_data?.name}</h1>
          <span
            className={`capitalize text-sm px-2 py-1 rounded-md ${automation_data?.status === "active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}
          >
            {automation_data?.status}
          </span>
        </div>

        {/* tools */}
        <div className="flex flex-wrap gap-2 mt-2">
          {automation_data?.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-[#EAEAEA] dark:bg-muted px-2 py-1 rounded-md text-xs"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* description */}
        <div className="text-sm mt-5">
          <p className="font-medium">Description:</p>
          <p>{automation_data?.description}</p>
        </div>
      </div>

      <div className="my-5">
        <h1 className="font-bold text-2xl  flex items-center gap-2  ">
          What This Workflow Does{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleQuestionMark
                size={14}
                className="text-text-color mt-0.5 cursor-pointer"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Provides a step by step explanation of what this workflow does.
              </p>
            </TooltipContent>
          </Tooltip>
        </h1>

        <div className="mt-2 text-sm">
          <ul className="list-disc ml-5">
            {automation_data?.dataflow.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl flex items-center gap-2 ">
          Links
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleQuestionMark
                size={14}
                className="text-text-color mt-0.5 cursor-pointer"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                <span className="text-[#E3496D] font-bold">Trigger</span> means
                how the workflow starts.
              </p>
              <p>
                <span className="text-[#E3496D] font-bold">Document</span> is
                where you should put your input or view the output.
              </p>
            </TooltipContent>
          </Tooltip>
        </h1>
        <div className="mt-2 text-sm">
          <span className="flex items-center gap-1">
            Trigger:{" "}
            {automation_data.triggerLink ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                href={automation_data?.triggerLink}
                className="flex items-center gap-1 text-blue-500 font-medium"
              >
                {automation_data?.trigger} <Link2 size={15} />
              </a>
            ) : (
              <span className="cursor-not-allowed flex items-center gap-1 text-text-color font-medium">
                {automation_data?.trigger} <Link2Off size={15} />
              </span>
            )}
          </span>

          <span className="flex items-center gap-1">
            Document:{" "}
            {automation_data.documentLink ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                href={automation_data?.documentLink}
                className="flex items-center gap-1 text-blue-500 font-medium"
              >
                {automation_data?.document} <Link2 size={15} />
              </a>
            ) : (
              <span className="cursor-not-allowed flex items-center gap-1 text-text-color font-medium">
                {automation_data?.document} <Link2Off size={15} />
              </span>
            )}
          </span>
        </div>

        <div className="note mt-10 text-sm">
          <h1 className="font-bold">
            Note:{" "}
            <span className="font-normal ">
              If you’re still unsure, feel free to mention Justin in the{" "}
              <span className="bg-[#EAEAEA] dark:bg-[#171717] px-2 py-1 rounded-md text-[#E3496D] dark:text-yellow-500">
                #workflow_automation
              </span>{" "}
              channel in Slack.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
