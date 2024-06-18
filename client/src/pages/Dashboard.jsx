import {Checkbox, Column, Table, TableHeader} from 'react-aria-components';
import DashboardVideo from "../components/DashboardVideo";

export default function Dashboard() {
  return (
    <section>
    <input type="text" placeholder="Rechercher une vidéo.." className="bg-(var"/>
    <button type="button"> + </button>
    <Table aria-label="Files" selectionMode="multiple">
  <TableHeader>
    <Column>
      <Checkbox slot="selection" />
    </Column>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Date Modified</Column>
  </TableHeader>
    <DashboardVideo/>
    <DashboardVideo/>
    <DashboardVideo/>
    </Table>
    </section>
  )
}
