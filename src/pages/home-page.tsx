import CardStats from "../components/card-stats";
import TableData from "../components/table-data";
import { automations } from "../lib/automations-data";

export default function HomePage() {
  return (
    <div className="p-5 xl:pb-5 xl:pt-0 2xl:px-0 mx-auto 2xl:max-w-7xl  ">
      <div>
        <p className="website_description text-sm">
          A collection of automations built with n8n, integrating multiple
          third-party applications and backend systems.
        </p>
      </div>

      <div className="card_stats my-5">
        <CardStats automations={automations} />
      </div>

      <div className="table_data">
        <TableData />
      </div>
    </div>
  );
}
