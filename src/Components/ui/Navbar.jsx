import { Card, Group, rem, Image, Text, Button, Flex, Burger, Drawer, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import classes from "./Navbar.module.css";
import {
  IconInfoSquareRounded,
  IconAddressBook,
  IconTrekking,
  IconSparkles,
  IconCertificate,
} from '@tabler/icons-react';

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Card style={{ borderBottom: "1px solid #D9D9D9" }} >
        <Flex justify={isMobile ? "space-between" : "space-around"} >
          <Image src={"/Logo.svg"} fit='contain' />
          {!isMobile && (
            <Group gap={40}>
              <Text className={classes.texthover}>About us</Text>
              <Text className={classes.texthover}>Training</Text>
              <Text className={classes.texthover}>Features</Text>
              <Text className={classes.texthover}>Courses</Text>
              <Text className={classes.texthover}>Contact</Text>
            </Group>
          )}
          {isMobile && (
            <>

              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Burger opened={opened} onClick={toggle} onMouseLeave={toggle} />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconInfoSquareRounded style={{ width: rem(14), height: rem(14) }} />}>
                    About us
                  </Menu.Item>
                  <Menu.Item leftSection={<IconTrekking style={{ width: rem(14), height: rem(14) }} />}>
                    Training
                  </Menu.Item>
                  <Menu.Item leftSection={<IconSparkles style={{ width: rem(14), height: rem(14) }} />}>
                    Features
                  </Menu.Item>
                  <Menu.Item leftSection={<IconCertificate style={{ width: rem(14), height: rem(14) }} />}>
                    Courses
                  </Menu.Item>
                  <Menu.Item leftSection={<IconAddressBook style={{ width: rem(14), height: rem(14) }} />}>
                    Contact
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </>

          )}
        </Flex>
      </Card>


    </>
  );
};
