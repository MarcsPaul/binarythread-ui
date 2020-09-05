import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TableBuilder from "../commons/tableBuilder";
import { tableHeaderConf } from "../../constants/text-constants";
import {
  getAllUrlsApi,
  shortenUrlApi,
  deleteUrlApi,
} from "../../services/AJAX";
import LoadingState from "../commons/loaders";

const Dashboard = (props) => {
  const [urlsList, seturlsList] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setloading(true);
    const result = await getAllUrlsApi({ body: null });
    seturlsList(result.res.body.data);
    setloading(false);
  }

  const onDelete = (id) => {
    deleteUrlApi({ id }).then((res) => {
      fetchData();
    });
  };

  const onSubmit = async (data) => {
    await shortenUrlApi(data).then((result) => {
      fetchData();
    });
  };

  const onLogout = () => {
    props.history.push({ pathname: "/" });
  };

  return (
    <>
      <div className="header">
        <span>Welcome!</span>
        <button
          className="btn btn-xs btn-primary text-uppercase"
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
      <div className="container">
        <div className="dashboard-container">
          <div className="col-sm-9 col-md-9 col-lg-9 mx-auto">
            <UrlConverter onSubmit={onSubmit} />
            {loading ? (
              <LoadingState />
            ) : (
              <TableBuilder
                onDelete={onDelete}
                tableBodyConf={urlsList}
                tableHeaderConf={tableHeaderConf}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const UrlConverter = ({ onSubmit }) => {
  const { register, handleSubmit, errors, setValue } = useForm();
  return (
    <div className="convert_url">
      <form
        className="form-signin"
        onSubmit={() => {
          handleSubmit(onSubmit);
          setValue("shortUrl", "");
        }}
      >
        <input
          type="text"
          name="shortUrl"
          ref={register({
            required: true,
            pattern: /^\S+$/i,
          })}
          className="form-control url_entry"
          placeholder="enter your URL"
        />
        {errors.shortUrl && "Enter a valid url"}
        <button className="btn btn-xs btn-primary text-uppercase" type="submit">
          Shorten
        </button>
      </form>
    </div>
  );
};
