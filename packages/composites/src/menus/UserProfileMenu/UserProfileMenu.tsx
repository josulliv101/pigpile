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
        margin="0"
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"xs"} name={user?.displayName || "?"} bgColor="red.500" />
      </MenuButton>
      <MenuList
        bgColor="gray.200"
        pb="0"
        rootProps={{ mb: "32px" }}
        alignItems={"center"}
        minW="300px"
        color="blackAlpha.700"
        _dark={{ color: "whiteAlpha.700" }}
      >
        <Stack as={Center} my="4">
          <Avatar
            size={"lg"}
            name={user?.displayName || "?"}
            bgColor="red.500"
          />
          <Text fontWeight="semibold">
            {user?.displayName} {user?.isAdmin ? " (admin)" : ""}
          </Text>
        </Stack>
        <Box bgColor="white" py="3">
          <MenuGroup title="Campaigns">
            <MenuItem fontSize="xs">View All</MenuItem>
            <MenuDivider my="0" />
            <MenuItem fontSize="xs">Create New</MenuItem>
          </MenuGroup>
          <MenuGroup title="User Profile">
            <MenuItem fontSize="xs">Settings</MenuItem>
            <MenuDivider my="0" />
            <MenuItem fontSize="xs" onClick={onLogout}>
              Logout
            </MenuItem>
          </MenuGroup>
        </Box>
      </MenuList>
    </Menu>
  );
}
