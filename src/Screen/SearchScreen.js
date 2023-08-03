import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        value={searchTerm}
        setValue={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
