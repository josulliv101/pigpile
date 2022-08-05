import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  Stack,
  Text,
} from "@josulliv101/core";

export function UserProfileMenu({ user, onLogout }) {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={IconButton}
        cursor={"pointer"}
        margin="0"
        minW={0}
        rounded={"full"}
        variant={"link"}
      >
        <Avatar
          bgColor="red.500"
          name={user?.displayName || "?"}
          size={"xs"}
        />
      </MenuButton>
      <MenuList
        _dark={{ color: "whiteAlpha.700" }}
        alignItems={"center"}
        bgColor="gray.200"
        color="blackAlpha.700"
        minW="300px"
        pb="0"
        rootProps={{ mb: "32px" }}
      >
        <Stack
          as={Center}
          my="4"
        >
          <Avatar
            bgColor="red.500"
            name={user?.displayName || "?"}
            size={"lg"}
          />
          <Text fontWeight="semibold">
            {user?.displayName} {user?.isAdmin ? " (admin)" : ""}
          </Text>
        </Stack>
        <Box
          bgColor="white"
          py="3"
        >
          <MenuGroup title="Campaigns">
            <MenuItem fontSize="xs">View All</MenuItem>
            <MenuDivider my="0" />
            <MenuItem fontSize="xs">Create New</MenuItem>
          </MenuGroup>
          <MenuGroup title="User Profile">
            <MenuItem fontSize="xs">Settings</MenuItem>
            <MenuDivider my="0" />
            <MenuItem
              fontSize="xs"
              onClick={onLogout}
            >
              Logout
            </MenuItem>
          </MenuGroup>
        </Box>
      </MenuList>
    </Menu>
  );
}
