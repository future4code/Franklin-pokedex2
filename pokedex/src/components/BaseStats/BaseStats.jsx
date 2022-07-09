import { StatisticBar, StatisticName, StatisticValue } from "./styles.jsx";
import { Table, Tr, Td, Tbody } from "@chakra-ui/react";

function BaseStats({ stats, color }) {
  return (
    <Table>
      <Tbody>
        {stats?.map((slot, index) => {
          return (
            <Tr key={index}>
              <Td>
                <StatisticName color={color}>
                  {slot.stat.name?.toUpperCase()}
                </StatisticName>
              </Td>
              <Td>
                <StatisticValue>{slot?.base_stat}</StatisticValue>
              </Td>
              <Td>
                <StatisticBar src="/images/stats-bar.png" alt="" />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default BaseStats;
