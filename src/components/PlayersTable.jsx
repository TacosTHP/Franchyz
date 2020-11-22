import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag } from 'antd';

import 'styles/playersTable.scss';

const PlayersTable = ({ players }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age (years)',
      dataIndex: 'age',
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 3,
      },
    },
    {
      title: 'Position',
      dataIndex: 'position',
      sorter: {
        compare: (a, b) => a.position - b.position,
        multiple: 2,
      },
    },
    {
      title: 'Height (cm)',
      dataIndex: 'height',
      sorter: {
        compare: (a, b) => a.height - b.height,
        multiple: 1,
      },
    },
    {
      title: 'Weight (kg)',
      dataIndex: 'weight',
      sorter: {
        compare: (a, b) => a.weight - b.weight,
        multiple: 1,
      },
    },
    {
      title: 'Availability',
      dataIndex: 'availability',
      render: (text) => {
        const color = text === 'Available' ? 'green' : 'red';
        return (
          <Tag color={color}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  const setupTable = (teamPlayers) => {
    const playerAge = (player) => {
      const today = new Date();
      const age = today - new Date(player.birthdate);
      return Math.trunc(age / 31536000000);
    };

    const playerAvailiability = (player) => {
      if (player['availability?'] === true) {
        return 'Available';
      }
      return 'Unavailable';
    };

    const data = [];
    teamPlayers.forEach((player, i) => {
      data.push(
        {
          key: i,
          name: `${player.first_name} ${player.last_name}`,
          age: playerAge(player),
          position: player.position,
          height: player.height,
          weight: player.weight,
          availability: playerAvailiability(player),
        },
      );
    });
    return data;
  };

  return (
    <>
      <Table columns={columns} dataSource={setupTable(players)} />
    </>
  );
};

export default PlayersTable;
