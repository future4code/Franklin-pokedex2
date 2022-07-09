import { StatisticBar, StatisticName, StatisticValue } from "./styles.jsx";
import { Table, Tr, Td } from "@chakra-ui/react";

function BaseStats() {
  return (
    <Table>
      <Tr>
        <Td>
          <StatisticName>HP</StatisticName>
        </Td>
        <Td>
          <StatisticValue>039</StatisticValue>
        </Td>
        <Td>
          <StatisticBar src="images/stats-bar.png" />
        </Td>
      </Tr>
      <Tr>
        <Td>
          <StatisticName>ATTACK</StatisticName>
        </Td>
        <Td>
          <StatisticValue>052</StatisticValue>
        </Td>
        <Td>
          <StatisticBar src="images/stats-bar.png" />
        </Td>
      </Tr>
      <Tr>
        <Td>
          <StatisticName>DEFENSE</StatisticName>
        </Td>

        <Td>
          <StatisticValue>043</StatisticValue>
        </Td>
        <Td>
          <StatisticBar src="images/stats-bar.png" />
        </Td>
      </Tr>
      <Tr>
        <Td>
          <StatisticName>SPECIAL-ATTACK</StatisticName>
        </Td>
        <Td>
          <StatisticValue>060</StatisticValue>
        </Td>
        <Td>
          <StatisticBar src="images/stats-bar.png" />
        </Td>
      </Tr>
      <Tr>
        <Td>
          <StatisticName>SPECIAL-DEFENSE</StatisticName>
        </Td>
        <Td>
          <StatisticValue>050</StatisticValue>
        </Td>
        <Td>
          <StatisticBar src="images/stats-bar.png" />
        </Td>
      </Tr>
      <Tr>
        <Td>
          <StatisticName>SPEED</StatisticName>
        </Td>
        <Td>
          <StatisticValue>065</StatisticValue>
        </Td>
        <Td>
          <StatisticBar src="images/stats-bar.png" />
        </Td>
      </Tr>
    </Table>
  );
}

export default BaseStats;
