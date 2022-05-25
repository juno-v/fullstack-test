import * as React from "react";
import Box from "@mui/material/Box";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGridPro,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

export default function FullFeaturedCrudGrid(props) {
  const initialRows = props.wizards;
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  //   const handleRowEditStart = (params, event) => {
  //     event.defaultMuiPrevented = true;
  //   };

  //   const handleRowEditStop = (params, event) => {
  //     event.defaultMuiPrevented = true;
  //   };

  //   const handleEditClick = (id) => () => {
  //     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  //   };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    // TO DO : considering adding alerts for fail or success deletes, check network to see what statuses are and add guards for that
    // setRows(rows.filter((row) => row.id !== id));
    if (id) {
      try {
        const res = await fetch(`http://localhost:8080/wizards/${id}`, {
          method: "delete",
        });
        const data = await res.json();
        const result = {
          status: res.status + "-" + res.statusText,
          headers: { "Content-Type": res.headers.get("Content-Type") },
          data: data,
        };
        // setDeleteResult(fortmatResponse(result));
      } catch (err) {
        // setDeleteResult(err.message);
      }
    }
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    // const editedRow = rows.find((row) => row.id === id);
    // if (editedRow.isNew) {
    //   setRows(rows.filter((row) => row.id !== id));
    // }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: false,
    },
    {
      field: "first_name",
      headerName: "First Name",
      width: 180,
      editable: true,
    },
    { field: "last_name", headerName: "Last Name", editable: true },
    {
      field: "email",
      headerName: "Email",
      width: 180,
      editable: true,
    },
    {
      field: "house",
      headerName: "House",
      width: 180,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          // TO DO: stretch goal | add editable feature in data grid
          //   <GridActionsCellItem
          //     icon={<EditIcon />}
          //     label="Edit"
          //     className="textPrimary"
          //     onClick={handleEditClick(id)}
          //     color="inherit"
          //   />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGridPro
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        // onRowEditStart={handleRowEditStart}
        // onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
