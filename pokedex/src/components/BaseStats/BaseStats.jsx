import { ProgressBar, StatisticName, StatisticValue } from "./styles.jsx";
import { Table, Tr, Td, Tbody, Progress } from "@chakra-ui/react";

function BaseStats({ stats, color }) {
  return (
    <Table variant={"unstyled"}>
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
                <ProgressBar color={color}>
                  <Progress
                    value={slot?.base_stat}
                    size={"sm"}
                    max={150}
                    hasStripe
                    isAnimated
                    width={150}
                  />
                </ProgressBar>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default BaseStats;
